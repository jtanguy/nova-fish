const {uiGroups, ansiGroups, syntaxGroups} = require('nova-colors')

const dehex = (hex) => hex.substr(1, 6)

const template = `
function nova-color
    set fish_color_normal ${dehex(uiGroups.foreground)}
    set fish_color_command ${dehex(syntaxGroups.statement)}
    set fish_color_quote ${dehex(syntaxGroups.constant)}
    set fish_color_redirection ${dehex(syntaxGroups.special)}
    set fish_color_end ${dehex(syntaxGroups.special)}
    set fish_color_error ${dehex(uiGroups.userActionNeeded)}
    set fish_color_param ${dehex(syntaxGroups.constant)}
    set fish_color_comment ${dehex(syntaxGroups.trivial)}
    set fish_color_match ${dehex(uiGroups.userCurrentState)}
    set fish_color_search_match ${dehex(uiGroups.userCurrentState)}
    set fish_color_operator ${dehex(syntaxGroups.special)}
    set fish_color_escape ${dehex(syntaxGroups.special)}
    set fish_color_cwd ${dehex(syntaxGroups.special)}
    set fish_color_autosuggestion ${dehex(syntaxGroups.trivial)}
    set fish_color_user ${dehex(syntaxGroups.type)}
    set fish_color_host ${dehex(syntaxGroups.identifier)}
    set fish_color_cancel ${dehex(uiGroups.userActionNeeded)}

    set fish_pager_color_prefix ${dehex(syntaxGroups.constant)}
    set fish_pager_color_completion ${dehex(uiGroups.userCurrentState)}
    set fish_pager_color_description ${dehex(syntaxGroups.trivial)}
    set fish_pager_color_progress ${dehex(syntaxGroups.trivial)}
    set fish_pager_color_secondary ${dehex(syntaxGroups.trivial)}
end
`;

process.stdout.write(template)

