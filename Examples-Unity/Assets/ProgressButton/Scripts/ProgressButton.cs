using Ultraleap.TouchFree.Tooling;
using Ultraleap.TouchFree.Tooling.Connection;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class ProgressButton : MonoBehaviour,
                              IPointerClickHandler,
                              IPointerDownHandler,
                              IPointerEnterHandler,
                              IPointerExitHandler
{
    public Camera UICamera;
    public RectTransform highlight;
    [Space(10)]
    public bool allowAnyInteraction;
    public InteractionType interactionType;
    [Space(10)]
    public bool AnimationEnabled = true;
    public bool edgeDetect = true;
    [Range(1, 100)] public float progressLerpSpeed = 10;

    private Animator animator;
    private float _progressToClick;
    private Selectable selectable;
    private bool clicked;
    private const string ON_ENTER = "OnEnter";
    private const string ON_EXIT = "OnExit";
    private const string ON_DOWN = "OnDown";
    private const string ON_CLICK = "OnClick";
    private const string HOVER = "Hover";
    private const string PROGRESS_TO_CLICK = "ProgressToClick";


    // Start is called before the first frame update
    void Start()
    {
        selectable = this.GetComponent<Selectable>();
        animator = GetComponent<Animator>();
        if (animator == null)
        {
            Debug.LogWarning($"No animator component on Progress Button: {gameObject.name}");
        }
        if (UICamera == null) UICamera = Camera.main;
    }

    void OnDisable()
    {
        if (animator != null)
        {
            ResetButton();
        }
    }

    public void OnPointerEnter(PointerEventData _data)
    {
        if (!selectable.interactable || !AnimationEnabled)
        {
            return;
        }

        InputActionManager.TransmitInputAction += UpdateButton;

        animator.SetBool(HOVER, true);
        animator.ResetTrigger(ON_EXIT);
        animator.ResetTrigger(ON_CLICK);
        animator.ResetTrigger(ON_DOWN);
        animator.SetTrigger(ON_ENTER);
    }

    public void OnPointerExit(PointerEventData _data)
    {
        if (!selectable.interactable || !AnimationEnabled)
        {
            animator.ResetTrigger(ON_ENTER);
            animator.SetBool(HOVER, false);
            animator.SetTrigger(ON_EXIT);
            return;
        }
        if (!clicked)
        {
            animator.ResetTrigger(ON_ENTER);

            InputActionManager.TransmitInputAction -= UpdateButton;

            animator.SetBool(HOVER, false);
            animator.SetTrigger(ON_EXIT);
        }
        else
        {
            clicked = false;
        }
    }

    public void OnPointerClick(PointerEventData _data)
    {
        if (!selectable.interactable || !AnimationEnabled)
        {
            return;
        }
        animator.SetTrigger(ON_CLICK);
        clicked = true;
    }

    public void OnPointerDown(PointerEventData _data)
    {
        if (!selectable.interactable || !AnimationEnabled)
        {
            return;
        }
        animator.SetTrigger(ON_DOWN);
    }

    public void UpdateButton(InputAction _inputData)
    {
        if (!selectable.interactable || !AnimationEnabled)
        {
            return;
        }
        if (allowAnyInteraction || _inputData.InteractionType == interactionType)
        {
            _progressToClick = Mathf.Lerp(_progressToClick, _inputData.ProgressToClick, progressLerpSpeed * Time.deltaTime);
            animator.SetFloat(PROGRESS_TO_CLICK, _progressToClick);

            Vector3 position = UICamera.ScreenToWorldPoint(_inputData.CursorPosition);

            if (edgeDetect)
            {
                position = UICamera.ScreenToWorldPoint(EdgeDetect(_inputData.CursorPosition, highlight.sizeDelta.x / 2));
            }

            highlight.position = new Vector3(position.x, position.y, transform.position.z);
        }

        if (!CursorIsHovering(_inputData.CursorPosition))
        {
            ResetButton();
        }
    }

    private void ResetButton()
    {
        if (ConnectionManager.serviceConnection != null)
        {
            InputActionManager.TransmitInputAction -= UpdateButton;
        }
        animator.SetBool(HOVER, false);
        animator.ResetTrigger(ON_EXIT);
        animator.ResetTrigger(ON_CLICK);
        animator.ResetTrigger(ON_DOWN);
        animator.ResetTrigger(ON_ENTER);
        clicked = false;
    }

    private bool CursorIsHovering(Vector2 _position)
    {
        _position = UICamera.ScreenToWorldPoint(_position);
        RectTransform rectTransform = GetComponent<RectTransform>();
        return rectTransform.rect.Contains(rectTransform.InverseTransformPoint(_position));
    }

    private Vector2 EdgeDetect(Vector2 _position, float _maxEdgeOffset)
    {

        Rect rect = RectTransformToScreenSpace(GetComponent<RectTransform>());
        Vector2 min = RectTransformUtility.WorldToScreenPoint(UICamera, rect.min);
        Vector2 max = RectTransformUtility.WorldToScreenPoint(UICamera, rect.max);
        Vector2 edgePoint = NearestPointOnRect(min, max, _position);

        Vector2 point = Vector3.Lerp(edgePoint, _position, 0.2f);
        if (Vector2.Distance(edgePoint, point) > _maxEdgeOffset)
        {
            point = edgePoint + ((point - edgePoint).normalized * _maxEdgeOffset);
        }

        return point;
    }

    #region Utility
    Vector2 NearestPointOnRect(Vector2 _minPos, Vector2 _maxPos, Vector2 _point)
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

    public static Rect RectTransformToScreenSpace(RectTransform _transform)
    {
        Vector2 size = Vector2.Scale(_transform.rect.size, _transform.lossyScale);
        return new Rect((Vector2)_transform.position - (size * 0.5f), size);
    }
    #endregion
}
