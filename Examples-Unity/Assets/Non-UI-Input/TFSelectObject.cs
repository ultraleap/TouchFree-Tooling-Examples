using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Ultraleap.TouchFree.Tooling;
using Ultraleap.TouchFree.Tooling.Connection;

public class TFSelectObject : MonoBehaviour
{
    public Transform cursorObject;
    public Transform sceneObjects;
    
    public InputAction currentAction;

    // Start is called before the first frame update
    void Start()
    {
        InputActionManager.TransmitInputAction += HandleInputAction;
        ConnectionManager.HandsLost += Reset;
    }

    void Update()
    {
        if (currentAction.InputType == InputType.DOWN)
        {
            print("Down");
        }
    }

    public void HandleInputAction(InputAction _action)
    {
        currentAction = _action;

        RaycastHit hit;
        if (Physics.Raycast(Camera.main.ScreenPointToRay(_action.CursorPosition), out hit))
        {
            cursorObject.position = hit.point;
            
            if (_action.InputType == InputType.DOWN)
            {
                hit.transform.gameObject.SetActive(false);
            }
        }
    }

    public void Reset()
    {
        for(int i = 0; i < sceneObjects.childCount; i++)
        {
            sceneObjects.GetChild(i).gameObject.SetActive(true);
        }
    }
}
