
async function updateInnerHTMLByTagName(className, html, element = null)
{
    if (!className) return false;

    if (element)
    {
        const elements = element.getElementsByTagName(className)

        for (const e of elements)
        {
            e.innerHTML = html;
        }

        return true;
    }
    else
    {
        const elements = document.getElementsByTagName(className)

        for (const e of elements)
        {
            e.innerHTML = html;
        }

        return true;
    }
}

async function updateOuterHTMLByTagName(className, html, element = null)
{
    if (!className) return false;

    if (element)
    {
        const elements = element.getElementsByTagName(className)

        for (const e of elements)
        {
            e.outerHTML = html;
        }

        return true;
    }
    else
    {
        const elements = document.getElementsByTagName(className)

        for (const e of elements)
        {
            e.outerHTML = html;
        }

        return true;
    }
}


async function prependInnerHTMLByTagName(className, html, element = null)
{
    if (!className) return false;

    if (element)
    {
        const elements = element.getElementsByTagName(className)

        for (const e of elements)
        {
            e.insertAdjacentHTML("afterbegin", html);
        }

        return true;
    }
    else
    {
        const elements = document.getElementsByTagName(className)

        for (const e of elements)
        {
            e.insertAdjacentHTML("afterbegin", html);
        }

        return true;
    }
}

async function prependOuterHTMLByTagName(className, html, element = null)
{
    if (!className) return false;

    if (element)
    {
        const elements = element.getElementsByTagName(className)

        for (const e of elements)
        {
            e.insertAdjacentHTML("beforebegin", html);
        }

        return true;
    }
    else
    {
        const elements = document.getElementsByTagName(className)

        for (const e of elements)
        {
            e.insertAdjacentHTML("beforebegin", html);
        }

        return true;
    }
}

async function appendInnerHTMLByTagName(className, html, element = null)
{
    if (!className) return false;

    if (element)
    {
        const elements = element.getElementsByTagName(className)

        for (const e of elements)
        {
            e.insertAdjacentHTML("beforeend", html);
        }

        return true;
    }
    else
    {
        const elements = document.getElementsByTagName(className)

        for (const e of elements)
        {
            e.insertAdjacentHTML("beforeend", html);
        }

        return true;
    }
}

async function appendOuterHTMLByTagName(className, html, element = null)
{
    if (!className) return false;

    if (element)
    {
        const elements = element.getElementsByTagName(className)

        for (const e of elements)
        {
            e.insertAdjacentHTML("afterend", html);
        }

        return true;
    }
    else
    {
        const elements = document.getElementsByTagName(className)

        for (const e of elements)
        {
            e.insertAdjacentHTML("afterend", html);
        }

        return true;
    }
}

export
{
    updateInnerHTMLByTagName,
    updateOuterHTMLByTagName,
    prependInnerHTMLByTagName,
    prependOuterHTMLByTagName,
    appendInnerHTMLByTagName,
    appendOuterHTMLByTagName
};