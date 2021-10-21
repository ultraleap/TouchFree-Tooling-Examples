using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using Ultraleap.TouchFree.Tooling;

public class BoxDrag : MonoBehaviour, 
                        IPointerDownHandler, 
                        IPointerUpHandler,
                        IPointerExitHandler
{
    private RectTransform boxTransform;

    private bool grabbed = false;

    // Start is called before the first frame update
    void Start()
    {
        boxTransform = GetComponent<RectTransform>();
        InputActionManager.TransmitInputAction += UpdateBox;
    }

    // Update is called once per frame
    public void UpdateBox(InputAction _action)
    {
        if (grabbed && _action.InputType == InputType.MOVE)
        {
            float lerpSpeed = 0.5f;
            Vector2 position = _action.CursorPosition;
            boxTransform.anchoredPosition = Vector2.Lerp(boxTransform.anchoredPosition, position, lerpSpeed);
        }
    }

    public void OnPointerDown(PointerEventData _data)
    {
        grabbed = true;
    }

    public void OnPointerUp(PointerEventData _data)
    {
        grabbed = false;
    }
    public void OnPointerExit(PointerEventData _data)
    {
        grabbed = false;
    }

}
