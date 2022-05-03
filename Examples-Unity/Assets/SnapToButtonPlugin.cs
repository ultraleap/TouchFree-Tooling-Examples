using UnityEngine;
using Ultraleap.TouchFree.Tooling;

public class SnapToButtonPlugin : InputActionPlugin
{
    [Range(0, 1)] public float snapSoftness = 0.1f;
    public int snapDistance = 100;

    public RectTransform cursorRect;

    protected override InputAction? ModifyInputAction(InputAction _inputAction)
    {
        var selectables = FindObjectsOfType<UnityEngine.UI.Selectable>();

        if (selectables == null || selectables.Length == 0)
        {
            return _inputAction;
        }

        Vector2 nearestBtnPos = Vector2.zero;
        float distToNearest = Mathf.Infinity;

        Vector2 center = Vector2.zero;

        foreach (var selectable in selectables)
        {
            if(selectable.tag == "Ignore Snapping" || !selectable.interactable)
            {
                continue;
            }

            RectTransform bRect = selectable.GetComponent<RectTransform>();
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

                center = RectTransformUtility.WorldToScreenPoint(Camera.main, rect.center);
            }
        }

        cursorRect.anchoredPosition = _inputAction.CursorPosition;

        if (Vector2.Distance(nearestBtnPos, _inputAction.CursorPosition) < snapDistance)
        {
            Vector2 softSnapPos = CalculateSoftSnapPosition(_inputAction.CursorPosition, center, nearestBtnPos);

            _inputAction = new InputAction(_inputAction.Timestamp, _inputAction.InteractionType, _inputAction.HandType, _inputAction.Chirality, _inputAction.InputType, softSnapPos, _inputAction.DistanceFromScreen, _inputAction.ProgressToClick);
        }

        return _inputAction;
    }

    private Vector2 CalculateSoftSnapPosition(Vector2 _position, Vector2 _center, Vector2 _edge)
    {
        float distance = Vector2.Distance(_center, _position);
        float softSnapT = distance * Mathf.Lerp(0, 2f / snapDistance, snapSoftness);
        Vector2 softPosition = Vector2.Lerp(_center, _position, softSnapT);

        return softPosition;
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