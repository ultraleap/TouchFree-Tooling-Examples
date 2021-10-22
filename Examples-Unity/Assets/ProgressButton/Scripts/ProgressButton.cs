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
}
