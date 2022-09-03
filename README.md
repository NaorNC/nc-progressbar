## Screenshot & Video

- click - https://streamable.com/d7i0zb

![nc-progressabr](https://i.ibb.co/cYDdh7r/Screenshot-1.png)

# Our Discord:

If you have any problem, feel free to open a ticket - https://discord.gg/cKt4Mpd2PQ

# Installation

- Download the script then drag it to - ``` [standalone]``` folder.
- Add the following code to your ```server.cfg/resouces.cfg```

```
ensure nc-progressbar
```

# Export - qb-core/client/functions.lua

```lua
function QBCore.Functions.Progressbar(name, label, duration, useWhileDead, canCancel, disableControls, animation, prop, propTwo, onFinish, onCancel)
    exports['nc-progressbar']:Progress({
        name = name:lower(),
        duration = duration,
        label = label,
        useWhileDead = useWhileDead,
        canCancel = canCancel,
        controlDisables = disableControls,
        animation = animation,
        prop = prop,
        propTwo = propTwo,
    }, function(cancelled)
        if not cancelled then
            if onFinish then
                onFinish()
            end
        else
            if onCancel then
                onCancel()
            end
        end
    end)
end
