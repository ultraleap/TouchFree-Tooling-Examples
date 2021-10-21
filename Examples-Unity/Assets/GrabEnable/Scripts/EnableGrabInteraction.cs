using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Ultraleap.TouchFree.Tooling.Configuration;

public class EnableGrabInteraction : MonoBehaviour
{
    InteractionConfig interactionConfigRequest;

    // Start is called before the first frame update
    void Start()
    {
        // Interaction Config
        interactionConfigRequest = new InteractionConfig();
        interactionConfigRequest.interactionType = Ultraleap.TouchFree.Tooling.InteractionType.GRAB;
        interactionConfigRequest.useScrollingOrDragging = true;

        ChangeInteractionConfig();
    }

    public void ChangeInteractionConfig()
    {
        ConfigurationManager.RequestConfigChange(interactionConfigRequest, null, ChangeResponseCallback);
    }

    void ChangeResponseCallback(Ultraleap.TouchFree.Tooling.Connection.WebSocketResponse _response)
    {
        Debug.Log(JsonUtility.ToJson(_response));
    }
}
