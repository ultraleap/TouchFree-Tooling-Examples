using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class SwipeToPopColourChanger : MonoBehaviour
{
    public TextMeshProUGUI text;

    bool alphaUp = false;

    public float speed = 5;

    public void Update()
    {
        if(alphaUp)
        {
            text.color = new Color(text.color.r, text.color.g, text.color.b, text.color.a + Time.deltaTime * (speed / 10));

            if(text.color.a > 0.7f)
            {
                alphaUp = false;
            }
        }
        else
        {
            text.color = new Color(text.color.r, text.color.g, text.color.b, text.color.a - Time.deltaTime * (speed / 10));

            if (text.color.a <= 0.1f)
            {
                alphaUp = true;
            }
        }
    }
}
