
async function updateInnerHTMLByClassName(className, html, element = null)
{
    if (!className) return false;

    if (element)
    {
        const elements = element.getElementsByClassName(className)

        for (const e of elements)
        {
            e.innerHTML = html;
        }

        return true;
    }
    else
    {
        const elements = document.getElementsByClassName(className)

        for (const e of elements)
        {
            e.innerHTML = html;
        }

        return true;
    }
}

async function updateOuterHTMLByClassName(className, html, element = null)
{
    if (!className) return false;

    if (element)
    {
        const elements = element.getElementsByClassName(className)

        for (const e of elements)
        {
            e.outerHTML = html;
        }

        return true;
    }
    else
    {
        const elements = document.getElementsByClassName(className)

        for (const e of elements)
        {
            e.outerHTML = html;
        }

        return true;
    }
}


async function prependInnerHTMLByClassName(className, html, element = null)
{
    if (!className) return false;

    if (element)
    {
        const elements = element.getElementsByClassName(className)

        for (const e of elements)
        {
            e.insertAdjacentHTML("afterbegin", html);
        }

        return true;
    }
    else
    {
        const elements = document.getElementsByClassName(className)

        for (const e of elements)
        {
            e.insertAdjacentHTML("afterbegin", html);
        }

        return true;
    }
}

async function prependOuterHTMLByClassName(className, html, element = null)
{
    if (!className) return false;

    if (element)
    {
        const elements = element.getElementsByClassName(className)

        for (const e of elements)
        {
            e.insertAdjacentHTML("beforebegin", html);
        }

        return true;
    }
    else
    {
        const elements = document.getElementsByClassName(className)

        for (const e of elements)
        {
            e.insertAdjacentHTML("beforebegin", html);
        }

        return true;
    }
}

async function appendInnerHTMLByClassName(className, html, element = null)
{
    if (!className) return false;

    if (element)
    {
        const elements = element.getElementsByClassName(className)

        for (const e of elements)
        {
            e.insertAdjacentHTML("beforeend", html);
        }

        return true;
    }
    else
    {
        const elements = document.getElementsByClassName(className)

        for (const e of elements)
        {
            e.insertAdjacentHTML("beforeend", html);
        }

        return true;
    }
}

async function appendOuterHTMLByClassName(className, html, element = null)
{
    if (!className) return false;

    if (element)
    {
        const elements = element.getElementsByClassName(className)

        for (const e of elements)
        {
            e.insertAdjacentHTML("afterend", html);
        }

        return true;
    }
    else
    {
        const elements = document.getElementsByClassName(className)

        for (const e of elements)
        {
            e.insertAdjacentHTML("afterend", html);
        }

        return true;
    }
}

export
{
    updateInnerHTMLByClassName,
    updateOuterHTMLByClassName,
    prependInnerHTMLByClassName,
    prependOuterHTMLByClassName,
    appendInnerHTMLByClassName,
    appendOuterHTMLByClassName
};