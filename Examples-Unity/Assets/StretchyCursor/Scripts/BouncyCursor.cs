using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Ultraleap.TouchFree.Tooling.Connection;

namespace Ultraleap.TouchFree.Tooling.Cursors
{
    public class BouncyCursor : StretchyCursor
    {
        public float collisionRadius = 40;
        
        private bool handPresent = false;
        private Vector2 gravity = new Vector2(0, -9.81f);
        private Vector2 previousPosition;
        private float maxLerpSpeed = 100;
        private float lerpSpeed = 0;

        protected override void InitialiseCursor()
        {
            ConnectionManager.HandFound += HandFound;
            ConnectionManager.HandsLost += HandLost;
            cursorTransform.anchoredPosition = new Vector2(30, 30);
        }

        // Update is called once per frame
        protected override void Update()
        {
            Vector2 velocity = (cursorTransform.anchoredPosition - previousPosition) / Time.deltaTime * 0.99f;
            previousPosition = cursorTransform.anchoredPosition;

            if (handPresent)
            {
                cursorTransform.anchoredPosition = Vector2.Lerp(cursorTransform.anchoredPosition, targetPos, Time.deltaTime * lerpSpeed);
                stretchMultiplier = 2;
            }
            else
            {
                velocity += gravity;
                
                velocity = BounceOffEdges(velocity);
                cursorTransform.anchoredPosition += velocity * Time.deltaTime;
            
                stretchMultiplier = 4;
            }

            StretchCursor();
        }

        private Vector2 BounceOffEdges(Vector2 _velocity)
        {
            if (_velocity.y < 0 && cursorTransform.anchoredPosition.y <= collisionRadius)
            {
                _velocity.y = Mathf.Abs(_velocity.y);
            }
            else if (_velocity.y > 0 && cursorTransform.anchoredPosition.y + collisionRadius >= Screen.height)
            {
                _velocity.y = -_velocity.y;
            }
            
            if (_velocity.x < 0 && cursorTransform.anchoredPosition.x <= collisionRadius)
            {
                _velocity.x = Mathf.Abs(_velocity.x);
            }
            else if (_velocity.x > 0 && cursorTransform.anchoredPosition.x + collisionRadius >= Screen.width)
            {
                _velocity.x = -_velocity.x;
            }

            return _velocity;   
        }

        public void HandFound()
        {
            handPresent = true;
            StartCoroutine("RampLerpSpeed");
        }

        public void HandLost()
        {
            handPresent = false;
            lerpSpeed = 0;
        }

        public IEnumerator RampLerpSpeed()
        {
            while(lerpSpeed < maxLerpSpeed)
            {
                yield return null;
                lerpSpeed += 0.5f;
            }
        }
    }
}
