using UnityEngine;
using UnityEngine.EventSystems;
using System.Collections;

namespace Ultraleap.TouchFree.Tooling.InputControllers
{
    public class UnityInputConverter : MonoBehaviour
    {
        [HideInInspector] public Vector2 touchPosition;
        [HideInInspector] public TouchPhase touchPhase = TouchPhase.Ended;
        [HideInInspector] public bool isTouching = false;


        public InputActionManager inputActionManager;

        private void Start()
        {
            inputActionManager.TransmitInputAction += HandleInputAction;
        }

        private void OnDestroy()
        {
            inputActionManager.TransmitInputAction -= HandleInputAction;
        }

        public Touch CheckForTouch(int index)
        {
            if (touchPhase == TouchPhase.Ended || touchPhase == TouchPhase.Canceled)
            {
                isTouching = false;
            }

            return new Touch()
            {
                fingerId = index,
                position = touchPosition,
                radius = 0.1f,
                phase = touchPhase
            };
        }

        protected void HandleInputAction(InputAction _inputData)
        {
            InputType type = _inputData.InputType;
            Vector2 cursorPosition = _inputData.CursorPosition;

            touchPosition = cursorPosition;

            switch (type)
            {
                case InputType.DOWN:
                    touchPhase = TouchPhase.Began;
                    isTouching = true;
                    break;

                case InputType.MOVE:
                    touchPhase = TouchPhase.Moved;
                    break;

                case InputType.CANCEL:
                    touchPhase = TouchPhase.Canceled;
                    break;

                case InputType.UP:
                    touchPhase = TouchPhase.Ended;
                    break;
            }
        }

        protected void OnDisable()
        {
            touchPhase = TouchPhase.Canceled;
        }
    }
}