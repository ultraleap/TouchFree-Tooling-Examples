using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class BubbleSpawner : MonoBehaviour
{
    public static BubbleSpawner Instance;

    public Transform bubbleParent;
    public Transform bubblePrefab;

    public float minBubbleSpawnTime = 0.1f;
    public float maxBubbleSpawnTime = 0.8f;

    float currentSpawnTimer = 0;

    [HideInInspector] public int score = 0;

    public TextMeshProUGUI scoreText;

    public RectTransform leftAnchorMarker;
    public RectTransform rightAnchorMarker;

    private void Awake()
    {
        Instance = this;
        Application.targetFrameRate = 60;
    }

    private void Update()
    {
        currentSpawnTimer -= Time.deltaTime;

        if (currentSpawnTimer <= 0)
        {
            RectTransform bubbleRect = Instantiate(bubblePrefab, bubbleParent).GetComponent<RectTransform>();
            bubbleRect.localPosition = new Vector2(bubbleRect.anchoredPosition.x + Random.Range(leftAnchorMarker.localPosition.x, rightAnchorMarker.localPosition.x), bubbleRect.anchoredPosition.y);
            
            currentSpawnTimer = Random.Range(minBubbleSpawnTime, maxBubbleSpawnTime);
        }
    }

    public void AddScore()
    {
        score++;
        scoreText.text = score.ToString();
    }
}