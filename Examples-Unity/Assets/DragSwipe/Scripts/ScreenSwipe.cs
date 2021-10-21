using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Ultraleap.TouchFree.Tooling;

public class ScreenSwipe : MonoBehaviour
{
    public Animator screenAnimator;
    public float swipeCooldown = 1;
    public float swipeDistance = 200;
    public int activeScreen = 2;
    
    private List<RectTransform> screens;
    private float screenSpacing;
    private bool dragging = false;
    private bool swiping = false;
    private Vector2 dragStartPosition;
    private Vector2 targetPosition;

    // Start is called before the first frame update
    void Start()
    {
        if (screenAnimator == null) screenAnimator = GetComponent<Animator>();

        for(int i = 0; i < transform.childCount; i++)
        {
            screens.Add(transform.GetChild(i).GetComponent<RectTransform>());
        }

        InputActionManager.TransmitInputAction += HandleInputAction;
    }

    public void HandleInputAction(InputAction _action)
    {
        switch(_action.InputType)
        {
            case InputType.DOWN:
                if (!swiping)
                {
                    dragging = true;
                    dragStartPosition = _action.CursorPosition;
                }
                break;
            case InputType.MOVE:
                if (!swiping && dragging)
                {
                    int screenOffset = DetectSwipeDirectionByDistance(_action.CursorPosition);

                    // Having detected a swipe in a given direction, apply that to behaviour in your scene
                    // In this example we move to a screen in the given direction
                    int currentScreen = activeScreen;
                    activeScreen = Mathf.Clamp(activeScreen + screenOffset, 0, screens.Count-1);
                    
                    if (activeScreen != currentScreen)
                    {
                        StartCoroutine(MoveToScreen(targetPosition));
                    }
                }
                break;
            case InputType.UP:
                dragging = false;
                dragStartPosition = Vector2.zero;
                break;
        }
    }

    public int DetectSwipeDirectionByDistance(Vector2 cursorPosition)
    {
        if (cursorPosition.x - dragStartPosition.x > swipeDistance)
        {
            return -1;
        }
        else if (cursorPosition.x - dragStartPosition.x < -swipeDistance)
        {
            return 1;
        }
        return 0;
    }

    public IEnumerator MoveToScreen(Vector2 _targetPosition)
    {
        swiping = true;
        // Instruct the animator to change screens
        screenAnimator.SetInteger("Screen", activeScreen);
        screenAnimator.SetTrigger("Swipe");

        // Wait before accepting new swipes to avoid accidentally triggering when moving
        // your hand back to the centre of the interaction area
        yield return new WaitForSeconds(swipeCooldown);
        swiping = false;
    }
}
