import React from 'react';
import {Pressable} from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../styles/styles';
import * as StyleUtils from '../../styles/StyleUtils';
import getButtonState from '../../libs/getButtonState';
import * as Expensicons from '../Icon/Expensicons';
import Tooltip from '../Tooltip';
import Icon from '../Icon';
import withLocalize, {withLocalizePropTypes} from '../withLocalize';
import * as EmojiPickerAction from '../../libs/actions/EmojiPickerAction';

const propTypes = {
    /** Flag to disable the emoji picker button */
    isDisabled: PropTypes.bool,

    ...withLocalizePropTypes,
};

const defaultProps = {
    isDisabled: false,
};

const EmojiPickerButton = (props) => {
    let emojiPopoverAnchor = null;
    return (
        <Pressable
            ref={el => emojiPopoverAnchor = el}
            style={({hovered, pressed}) => ([
                styles.chatItemEmojiButton,
                StyleUtils.getButtonBackgroundColorStyle(getButtonState(hovered, pressed)),
            ])}
            disabled={props.isDisabled}
            onPress={() => EmojiPickerAction.showEmojiPicker(props.onModalHide, props.onEmojiSelected, emojiPopoverAnchor)}
        >
            {({hovered, pressed}) => (
                <Tooltip text={props.translate('reportActionCompose.emoji')}>
                    <Icon
                        src={Expensicons.Emoji}
                        fill={StyleUtils.getIconFillColor(getButtonState(hovered, pressed))}
                    />
                </Tooltip>
            )}
        </Pressable>
    );
};

EmojiPickerButton.displayName = 'EmojiPickerButton';
EmojiPickerButton.propTypes = propTypes;
EmojiPickerButton.defaultProps = defaultProps;
export default withLocalize(EmojiPickerButton);
