using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using Ultraleap.TouchFree.Tooling;

public class ConfettiDrag : MonoBehaviour, IBeginDragHandler, IEndDragHandler, IDragHandler
{
    public GameObject prefab;
    public RectTransform indicator;
    public CanvasGroup indicatorGroup;

    private Camera mainCam;

    private Vector2 startPosition;
    private float targetAlpha = 0;

    // Start is called before the first frame update
    void Start()
    {
        mainCam = Camera.main;   
        indicatorGroup = indicator.GetComponent<CanvasGroup>();
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Mathf.Abs(targetAlpha - indicatorGroup.alpha) > 0.05f)
        {
            indicatorGroup.alpha = Mathf.Lerp(indicatorGroup.alpha, targetAlpha, 0.1f);
        }
        else
        {
            indicatorGroup.alpha = targetAlpha;
        }
    }

    public void HandleInputAction(InputAction action)
    {
        Vector2 direction = startPosition - action.CursorPosition;
        indicator.anchoredPosition = (action.CursorPosition +  startPosition) / 2;
        indicator.rotation = Quaternion.FromToRotation(Vector3.up, direction);
        indicator.sizeDelta = new Vector2(indicator.sizeDelta.x, direction.magnitude - 40);
    }

    public void OnBeginDrag(PointerEventData data)
    {
        startPosition = data.position;
        targetAlpha = 1;
    }

    public void OnEndDrag(PointerEventData data)
    {
        targetAlpha = 0;

        Vector3 direction = startPosition - data.position;
        if (direction.magnitude > 20)
        {
            Vector3 position = mainCam.ScreenToWorldPoint(data.position) + (mainCam.ScreenPointToRay(startPosition).direction * 10);
            Quaternion rotation = Quaternion.FromToRotation(Vector3.forward, direction);
            GameObject newCannon = Instantiate(prefab, position, rotation);
            ParticleSystem ps = newCannon.GetComponent<ParticleSystem>();

            var main = ps.main;
            float dragForce = (0.1f + (direction.magnitude / Screen.height));
            main.startSpeed = new ParticleSystem.MinMaxCurve(main.startSpeed.constant * dragForce);
            main.maxParticles = (int)(main.maxParticles * dragForce * 2);
            
            ps.Play();
        }
    }

    public void OnDrag(PointerEventData data)
    {
        Vector2 direction = startPosition - data.position;
        indicator.anchoredPosition = (data.position +  startPosition) / 2;
        indicator.rotation = Quaternion.FromToRotation(Vector3.up, direction);
        indicator.sizeDelta = new Vector2(indicator.sizeDelta.x, direction.magnitude - 40);
    }
}
