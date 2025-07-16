function wish(msg)
{
    switch(msg)
    {
        case "gm":
            {
                console.log("Good Morning")
            }
            break;
            case "ga":
            {
                console.log("Good Afternon")
            }
            break;
            case "ge":
            {
                console.log("Good Evening")
            }
            break;
            case "gn":
            {
                console.log("Good Night")
            }
            break;
            default:
                {
                    console.log("Nothing to Wish")
                }
    }
}

wish("gm")
wish("ga")
wish("ge")
wish("gn")
wish("gnk")