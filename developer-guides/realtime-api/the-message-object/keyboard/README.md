# Keyboard

Keyboard is a type of menu that replaces the traditional keyboard, allowing a user to select from a series of options instead of typing out a request. When present it temporarily replaces the default keyboard on the mobile device with predefined reply options or actions implemented using [buttons](../buttons/).

A keyboard can be attached to any message type. To attach a keyboard to a message simply add the keyboard’s parameters to the payload JSON.

An initial implementation would vertically display an arbitrary set of buttons inside the keyboard space.

The keyboard object contains these fields:

- `buttons`: Array containing all keyboard buttons by order. See [buttons](../buttons/) for buttons parameter details.
- `default_height`: _(Optional)_  When true the keyboard will always be displayed with the same height as the native keyboard.When false short keyboards will be displayed with the minimal possible height. Maximal height will be native keyboard height
- `bg_color`: _(Optional)_ Background color of the keyboard.


```json
{
    "payload": {
        "keyboard": {
            "default_height": true,
            "buttons": [
                 "<BUTTON_OBJECT>",
                  "<BUTTON_OBJECT>",
                  "<BUTTON_OBJECT>",
                  "..."
            ]
        }
    }
}