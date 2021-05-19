using UnityEngine;
using Ultraleap.ScreenControl.Client;

public class SnapToButtonPlugin : InputActionPlugin
{
    public int snapDistance = 20;

    protected override ClientInputAction? ModifyInputAction(ClientInputAction _inputAction)
    {
        var buttons = FindObjectsOfType<UnityEngine.UI.Button>();

        if (buttons == null || buttons.Length == 0)
        {
            return _inputAction;
        }

        Vector2 nearestBtnPos = Vector2.zero;
        float distToNearest = Mathf.Infinity;

        foreach (var b in buttons)
        {
            RectTransform bRect = b.GetComponent<RectTransform>();
            Rect rect = RectTransformToScreenSpace(bRect);

            Vector2 pivotOffset = bRect.pivot;
            pivotOffset -= (Vector2.one / 2);
            pivotOffset *= rect.size;
            rect.center -= pivotOffset;

            var min = RectTransformUtility.WorldToScreenPoint(Camera.main, rect.min);
            var max = RectTransformUtility.WorldToScreenPoint(Camera.main, rect.max);

            var nearestRectPos = NearestPointOnRect(min, max, _inputAction.CursorPosition, 10);

            float distToB = Vector2.Distance(nearestRectPos, _inputAction.CursorPosition);

            if (distToB < distToNearest)
            {
                nearestBtnPos = nearestRectPos;
                distToNearest = distToB;
            }
        }

        if (Vector2.Distance(nearestBtnPos, _inputAction.CursorPosition) < snapDistance)
        {
            _inputAction = new ClientInputAction(_inputAction.Timestamp, _inputAction.InteractionType, _inputAction.HandType, _inputAction.Chirality, _inputAction.InputType, nearestBtnPos, _inputAction.DistanceFromScreen, _inputAction.ProgressToClick);
        }

        return _inputAction;
    }

    #region Utility

    /// <summary>
    /// 
    /// </summary>
    /// <param name="_minPos"></param>
    /// <param name="_maxPos"></param>
    /// <param name="_point"></param>
    /// <param name="_paddingPercentage">This moves the return point towards the
    /// middle of the rect to ensure the button is pressed.</param>
    /// <returns></returns>
    Vector2 NearestPointOnRect(Vector2 _minPos, Vector2 _maxPos, Vector2 _point, float _paddingPercentage = 0)
    {
        if (_point.x > _maxPos.x || _point.x < _minPos.x ||
            _point.y > _maxPos.y || _point.y < _minPos.y)
        {
            // we are out of the bounds so we should find the nearest point
            Vector2 minXMaxY = new Vector2(_minPos.x, _maxPos.y);
            Vector2 maxXminY = new Vector2(_maxPos.x, _minPos.y);

            Vector2[] pointsOnLines = new Vector2[4];

            pointsOnLines[0] = FindNearestPointOnLine(_minPos, minXMaxY, _point);
            pointsOnLines[1] = FindNearestPointOnLine(minXMaxY, _maxPos, _point);
            pointsOnLines[2] = FindNearestPointOnLine(_maxPos, maxXminY, _point);
            pointsOnLines[3] = FindNearestPointOnLine(maxXminY, _minPos, _point);

            Vector2 nearestPos = _point;
            float shortestDist = Mathf.Infinity;
            foreach (var pointOnLine in pointsOnLines)
            {
                float dist = Vector2.Distance(_point, pointOnLine);
                if (dist < shortestDist)
                {
                    shortestDist = dist;
                    nearestPos = pointOnLine;
                }
            }

            if (_paddingPercentage > 0)
            {
                _paddingPercentage = Mathf.Clamp(_paddingPercentage, 0, 100);

                Vector2 midPos = (_minPos + _maxPos) / 2;

                nearestPos += (midPos - nearestPos) * (_paddingPercentage / 100);
            }

            return nearestPos;
        }
        return _point;
    }

    public Vector2 FindNearestPointOnLine(Vector2 _startOfLine, Vector2 _endOfLine, Vector2 _point)
    {
        //Get heading
        Vector2 heading = (_endOfLine - _startOfLine);
        float magnitudeMax = heading.magnitude;
        heading.Normalize();

        //Do projection from the point but clamp it
        Vector2 lhs = _point - _startOfLine;
        float dotP = Vector2.Dot(lhs, heading);
        dotP = Mathf.Clamp(dotP, 0f, magnitudeMax);
        return _startOfLine + heading * dotP;
    }

    public static Rect RectTransformToScreenSpace(RectTransform _rectTransform)
    {
        Vector2 size = Vector2.Scale(_rectTransform.rect.size, _rectTransform.lossyScale);
        return new Rect((Vector2)_rectTransform.position - (size * 0.5f), size);
    }
    #endregion
}