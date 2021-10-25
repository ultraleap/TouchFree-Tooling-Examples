using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

using Ultraleap.TouchFree.Tooling;

[RequireComponent(typeof(Animator))]
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

    [Range(1, 100)]
    public float progressLerpSpeed = 10;

    private RectTransform rectTransform;
    private Animator animator;
    private Selectable selectable;

    private float progressToClick;
    private bool clicked;

    private const string ON_ENTER = "OnEnter";
    private const string ON_EXIT = "OnExit";
    private const string ON_DOWN = "OnDown";
    private const string ON_CLICK = "OnClick";
    private const string HOVER = "Hover";
    private const string PROGRESS_TO_CLICK = "ProgressToClick";

    void Start()
    {
        selectable = GetComponent<Selectable>();
        animator = GetComponent<Animator>();
        rectTransform = GetComponent<RectTransform>();

        if (UICamera == null)
        {
            UICamera = Camera.main;
        }
    }

    void OnDisable()
    {
        ResetButton();
    }

    public void OnPointerEnter(PointerEventData _data)
    {
        if (!selectable.interactable || !AnimationEnabled)
        {
            return;
        }

        InputActionManager.TransmitInputAction -= UpdateButton;
        InputActionManager.TransmitInputAction += UpdateButton;

        animator.SetBool(HOVER, true);
        animator.ResetTrigger(ON_EXIT);
        animator.ResetTrigger(ON_CLICK);
        animator.ResetTrigger(ON_DOWN);
        animator.SetTrigger(ON_ENTER);
    }

    public void OnPointerExit(PointerEventData _data)
    {
        if (!selectable.interactable || !AnimationEnabled || !clicked)
        {
            InputActionManager.TransmitInputAction -= UpdateButton;
            animator.ResetTrigger(ON_ENTER);
            animator.SetBool(HOVER, false);
            animator.SetTrigger(ON_EXIT);
            return;
        }

        clicked = false;
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
            progressToClick = Mathf.Lerp(progressToClick, _inputData.ProgressToClick, progressLerpSpeed * Time.deltaTime);
            animator.SetFloat(PROGRESS_TO_CLICK, progressToClick);

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
        InputActionManager.TransmitInputAction -= UpdateButton;

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
        return rectTransform.rect.Contains(rectTransform.InverseTransformPoint(_position));
    }
}