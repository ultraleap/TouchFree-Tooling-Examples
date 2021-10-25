using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BubbleScript : MonoBehaviour
{
    public RectTransform rectTransform;

    public Transform bubblePrefab;

    public float minFloatSpeed;
    public float maxFloatSpeed;
    float speed;

    public float minScale;
    public float maxScale;

    float lifetime = 200;

    float burstTimer = 0;
    Vector2 burstDirection;

    private void Awake()
    {
        speed = Random.Range(minFloatSpeed, maxFloatSpeed);
        rectTransform.localScale = Vector3.one * Random.Range(minScale, maxScale);
    }

    public void SetScale(float _scale)
    {
        rectTransform.localScale = Vector3.one * _scale;

        if(_scale < (minScale))
        {
            Destroy(gameObject);
        }
    }

    public void RandomBurstDirection()
    {
        BurstDirection(new Vector2(Random.Range(-3f, 3f), Random.Range(-3f, 3f)));
    }

    public void BurstDirection(Vector2 _burstDirection)
    {
        burstTimer = Random.Range(0.1f, 0.3f);
        burstDirection = _burstDirection;
    }

    void Update()
    {
        rectTransform.anchoredPosition = new Vector2(rectTransform.anchoredPosition.x, rectTransform.anchoredPosition.y + (speed * Time.deltaTime));
        lifetime -= Time.deltaTime;

        if(lifetime <= 0)
        {
            Destroy(gameObject);
        }

        if(burstTimer > 0)
        {
            burstTimer -= Time.deltaTime;
            rectTransform.anchoredPosition = rectTransform.anchoredPosition + (burstDirection * speed * Time.deltaTime);
            burstDirection *= (0.99f);
        }
    }

    public void Pop()
    {
        BubbleSpawner.Instance.AddScore();

        PushNearbyBubbles();

        int randomNewBubbles = Random.Range(2, 4);

        for(int i = 0; i < randomNewBubbles; i++)
        {
            BubbleScript bubble = Instantiate(bubblePrefab, transform.position + new Vector3(Random.Range(-0.1f, 0.1f), Random.Range(-0.1f, 0.1f), 0), transform.rotation, transform.parent).GetComponent<BubbleScript>();
            bubble.SetScale(rectTransform.localScale.x / Random.Range(1.3f, 1.6f));
            bubble.RandomBurstDirection();
        }

        Destroy(gameObject);
    }

    void PushNearbyBubbles()
    {
        foreach(Transform child in transform.parent)
        {
            BubbleScript bubble = child.GetComponent<BubbleScript>();

            if(bubble != null && bubble != this)
            {
                Vector2 direction = child.position - transform.position;

                if(direction.magnitude < 2)
                {
                    direction = direction.normalized;
                    bubble.BurstDirection(direction * Random.Range(1f, 3f));
                }
            }
        }
    }
}