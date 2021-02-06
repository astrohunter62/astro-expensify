import React from 'react';
import getModalStyles from '../../styles/getModalStyles';
import withWindowDimensions from '../withWindowDimensions';
import BaseModal from './BaseModal';
import {modalPropTypes} from './ModalPropTypes';

const defaultProps = {
    type: '',
};

const Modal = (props) => {
    const {
        modalStyle,
        modalContainerStyle,
        swipeDirection,
        animationIn,
        animationOut,
        shouldAddTopSafeAreaPadding,
        shouldAddBottomSafeAreaPadding,
        hideBackdrop,
    } = getModalStyles(props.type, {
        windowWidth: props.windowWidth,
        windowHeight: props.windowHeight,
        isSmallScreenWidth: props.isSmallScreenWidth,
    });

    // Only want to use useNativeDriver on Android. It has strange flashes issue on IOS
    // https://github.com/react-native-modal/react-native-modal#the-modal-flashes-in-a-weird-way-when-animating
    return (
        <BaseModal
            useNativeDriver
            modalStyle={modalStyle}
            modalContainerStyle={modalContainerStyle}
            swipeDirection={swipeDirection}
            animationIn={animationIn}
            animationOut={animationOut}
            shouldAddTopSafeAreaPadding={shouldAddTopSafeAreaPadding}
            shouldAddBottomSafeAreaPadding={shouldAddBottomSafeAreaPadding}
            hideBackdrop={hideBackdrop}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
        >
            {props.children}
        </BaseModal>
    );
};

Modal.propTypes = modalPropTypes;
Modal.defaultProps = defaultProps;
Modal.displayName = 'Modal';
export default withWindowDimensions(Modal);
