using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Ultraleap.TouchFree.Tooling;

public class SlicePlugin : InputActionPlugin
{
    [Tooltip("Minimum pixels per frame the hand must be moving at")]
    public int pixelVelocityThreshold = 18;
    [Tooltip("Minimum frmaes the hand must be moving above pixelVelocityThreshold")]
    public int requiredFramesAtVelocity = 2;

    int framesOverVelocityCounter = 0;
    Vector2 prevPos;

    bool triggerUpAtPrev = false;

    [HideInInspector] public Vector2 direction;

    public bool runPlugin = true;

    protected override InputAction? ModifyInputAction(InputAction _inputAction)
    {
        if(prevPos == Vector2.zero)
        {
            prevPos = _inputAction.CursorPosition;
        }

        if (triggerUpAtPrev)
        {
            _inputAction.CursorPosition = prevPos;
            _inputAction.InputType = InputType.UP;
            triggerUpAtPrev = false;
            return _inputAction;
        }

        if (!runPlugin)
        {
            direction = Vector2.up;
            return _inputAction;
        }

        Vector2 directionWithLength = _inputAction.CursorPosition - prevPos;
        direction = directionWithLength.normalized;

        if (Vector2.Distance(prevPos, _inputAction.CursorPosition) > pixelVelocityThreshold)
        {
            framesOverVelocityCounter++;
        }
        else
        {
            framesOverVelocityCounter = 0;
        }

        if (framesOverVelocityCounter >= requiredFramesAtVelocity)
        {
            // pop them!
            _inputAction.InputType = InputType.DOWN;
            triggerUpAtPrev = true;
        }

        prevPos = _inputAction.CursorPosition;
        return _inputAction;
    }
}
