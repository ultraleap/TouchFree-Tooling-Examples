using UnityEngine;
using UnityEngine.EventSystems;

using System.Collections.Generic;

namespace Ultraleap.TouchFree.Tooling.InputControllers
{
    public class MultiUnityUIInputController : BaseInput
    {
        public UnityInputConverter[] inputConverters;

        private StandaloneInputModule inputModule;
        private EventSystem eventSystem;

        private int baseDragThreshold = 100000;

        public override int touchCount => CalculateTouchCount();
        public override Touch GetTouch(int index) => CheckForTouch(index);

        List<int> touchingConverterIDs = new List<int>();

        protected override void Start()
        {
            base.Start();

            if (eventSystem == null)
            {
                eventSystem = FindObjectOfType<EventSystem>();
                inputModule = FindObjectOfType<StandaloneInputModule>();
            }

            inputModule.inputOverride = this;
            eventSystem.pixelDragThreshold = 0;
        }

        int CalculateTouchCount()
        {
            touchingConverterIDs.Clear();

            int index = 0;
            foreach(var converter in inputConverters)
            {
                if(converter.isTouching)
                {
                    touchingConverterIDs.Add(index);
                }

                index++;
            }

            return touchingConverterIDs.Count > 0 ? touchingConverterIDs.Count : base.touchCount;
        }

        private Touch CheckForTouch(int index)
        {
            return inputConverters[touchingConverterIDs[index]].CheckForTouch(index);
        }

        protected override void OnDisable()
        {
            eventSystem.pixelDragThreshold = baseDragThreshold;
            base.OnDisable();
        }
    }
}