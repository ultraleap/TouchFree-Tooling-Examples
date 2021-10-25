using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameModeSwitcher : MonoBehaviour
{
    public SlicePlugin slicePlugin;
    public BubbleSpawner spawner;
    public TrailRenderer cursorTrail;

    int lastScoreThreshold = 0;

    public GameObject bonusTextGameObject;

    float bonusTimeRemaining = 0;

    private void Update()
    {
        if(spawner.score % 10 == 0 && spawner.score != lastScoreThreshold)
        {
            // Swipe mode!

            lastScoreThreshold = spawner.score;

            if (bonusTimeRemaining <= 0)
            {
                StartCoroutine(BonusMode());
                bonusTimeRemaining += 5;
            }
            else
            {
                bonusTimeRemaining += 2;
            }
        }
    }

    IEnumerator BonusMode()
    {
        yield return null;

        bonusTextGameObject.SetActive(true);
        slicePlugin.runPlugin = true;
        cursorTrail.enabled = true;

        while (bonusTimeRemaining > 0)
        {
            bonusTimeRemaining -= Time.deltaTime;
            yield return null;
        }

        bonusTextGameObject.SetActive(false);
        slicePlugin.runPlugin = false;
        cursorTrail.enabled = false;
    }
}