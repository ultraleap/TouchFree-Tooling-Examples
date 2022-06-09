using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;

public class ConfettiDrag : MonoBehaviour, IPointerDownHandler, IPointerUpHandler
{
    public GameObject prefab;
    private Camera mainCam;

    private Vector2 startPosition;

    // Start is called before the first frame update
    void Start()
    {
        mainCam = Camera.main;   
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void OnPointerDown(PointerEventData data)
    {
        startPosition = data.position;
    }

    public void OnPointerUp(PointerEventData data)
    {
        Vector3 direction = startPosition - data.position;
        if (direction.magnitude > 20)
        {
            Vector3 position = mainCam.ScreenToWorldPoint(data.position) + (mainCam.ScreenPointToRay(data.position).direction * 10);
            Quaternion rotation = Quaternion.FromToRotation(Vector3.forward, direction);
            GameObject newCannon = Instantiate(prefab, position, rotation);
        }
    }

}
