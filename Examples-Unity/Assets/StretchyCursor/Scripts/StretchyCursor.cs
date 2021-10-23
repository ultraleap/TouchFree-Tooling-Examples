using UnityEngine;
using UnityEngine.UI;
using Ultraleap.TouchFree.Tooling.Connection;

namespace Ultraleap.TouchFree.Tooling.Cursors
{
    public class StretchyCursor : TouchlessCursor
    {
        private Vector2 previousPos;
        private Vector2 cursorVelocity;
        public float stretchMultiplier = 1;

        protected override void Update()
        {
            base.Update();

            StretchCursor();
        }

        public void StretchCursor()
        {
            Vector2 cursorPos = cursorTransform.anchoredPosition;
            // Streching
            Vector2 previousVelocity = cursorVelocity;
            cursorVelocity = (cursorVelocity + (cursorPos - previousPos)) * 0.5f;
            Vector2 acceleration = cursorVelocity - previousVelocity;
            previousPos = cursorPos;

            float stretchAmount = (acceleration.magnitude * Time.deltaTime);
            Vector3 velocityScale = Vector3.Lerp(Vector3.one, new Vector3(1, stretchMultiplier,1), stretchAmount);
            cursorTransform.localScale = Vector3.Lerp(cursorTransform.localScale, velocityScale, 0.1f);

            if (cursorVelocity.magnitude > 1f)
            {
                Vector2 futureVelocity = cursorVelocity + acceleration;
                cursorTransform.rotation = Quaternion.FromToRotation(Vector3.up, futureVelocity.normalized) ;
            }
        }
    }
}