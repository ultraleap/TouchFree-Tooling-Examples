using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Ultraleap.TouchFree.Tooling;
using Ultraleap.TouchFree.Tooling.Cursors;

public class SliceCursor : TouchlessCursor
{
    public Transform pinTransform;
    public SlicePlugin plugin;

    protected override void HandleInputAction(InputAction _inputData)
    {
        base.HandleInputAction(_inputData);
        pinTransform.up = Vector2.Lerp(pinTransform.up, -plugin.direction, Time.deltaTime * 30);

        pinTransform.localScale = Vector3.one * Remap(_inputData.ProgressToClick, 0, 1, 1, 0.5f);
        pinTransform.GetComponent<RectTransform>().sizeDelta = new Vector2(pinTransform.GetComponent<RectTransform>().sizeDelta.x, Remap(_inputData.ProgressToClick, 0, 1, 50, 10));
    }

    public float Remap(float value, float from1, float to1, float from2, float to2)
    {
        return (value - from1) / (to1 - from1) * (to2 - from2) + from2;
    }
}