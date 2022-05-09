using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Ultraleap.TouchFree.Tooling;
using Ultraleap.TouchFree.Tooling.Connection;
using Ultraleap.TouchFree.Tooling.Configuration;

public class PancakePlayerInput : MonoBehaviour
{
    public int playerID;
    public InputActionManager inputActionManager;
    public ConnectionManager connectionManager;

    Transform currentPancake = null;

    private void Start()
    {
        inputActionManager.TransmitInputAction += HandleInputAction;

        InteractionConfig config = new InteractionConfig();
        config.interactionType = InteractionType.GRAB;
        config.useScrollingOrDragging = true;

        ConfigurationManager.RequestConfigChange(connectionManager, config, null, null);
    }

    private void OnDestroy()
    {
        inputActionManager.TransmitInputAction -= HandleInputAction;
    }

    protected void HandleInputAction(InputAction _inputData)
    {
        InputType type = _inputData.InputType;
        Vector2 cursorPosition = _inputData.CursorPosition;

        switch (type)
        {
            case InputType.DOWN:
                HandleDown(cursorPosition);
                break;

            case InputType.MOVE:
                HandleMove(cursorPosition);
                break;

            case InputType.CANCEL:
                HandleRelease(cursorPosition);
                break;

            case InputType.UP:
                HandleRelease(cursorPosition);
                break;
        }
    }

    void HandleDown(Vector2 _cursorPosition)
    {
        if(currentPancake != null)
        {
            HandleRelease(_cursorPosition);
        }

        RaycastHit hit;
        Ray ray = Camera.main.ScreenPointToRay(_cursorPosition);

        if (Physics.Raycast(ray, out hit, 100, 1, QueryTriggerInteraction.Ignore))
        {
            Pancake pancakeHit = hit.transform.GetComponent<Pancake>();

            if(pancakeHit != null)
            {
                currentPancake = pancakeHit.transform;
            }
        }

        HandleMove(_cursorPosition);
    }

    void HandleMove(Vector2 _cursorPosition)
    {
        if (currentPancake != null)
        {
            RaycastHit hit;
            Ray ray = Camera.main.ScreenPointToRay(_cursorPosition);

            if (Physics.Raycast(ray, out hit, 100, 1, QueryTriggerInteraction.Collide))
            {
                currentPancake.position = new Vector3(hit.point.x, hit.transform.position.y, hit.point.z);
                currentPancake.rotation = Quaternion.identity;
            }
        }
    }

    void HandleRelease(Vector2 _cursorPosition)
    {
        currentPancake = null;
    }
}