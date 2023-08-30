async function getValueFromData(tartget, data)
{
    return await getValueFromObj(tartget.substring(5), data);
}

async function getValueFromObj(target, data)
{
    try
    {
        if (!target || !data)
        {
            throw new Error("getValueFromObj: Your object or the object target does not exist.");
        }

        return await target.split(".").reduce((obj, prop) => obj[prop], data);
    }
    catch (e)
    {
        console.error(e);
        return "";
    }
}

export { getValueFromObj, getValueFromData }