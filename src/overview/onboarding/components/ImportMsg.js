import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import localStyles from './Onboarding.css'

class ImportMsg extends PureComponent {
    static propTypes = {
        isImportsDone: PropTypes.bool.isRequired,
        onCancel: PropTypes.func.isRequired,
        onFinish: PropTypes.func.isRequired,
    }

    renderFinishMsg = () => (
        <span className={localStyles.choiceBtnContainer}>
            <p className={localStyles.readyMsg}>Memex is ready!</p>
            <br />
            <button
                className={cx(localStyles.choiceBtn, localStyles.startBtn)}
                onClick={this.props.onFinish}
                type="button"
            >
                Get Started
            </button>
            or
            <a
                className={localStyles.choiceBtn}
                type="button"
                href="/options/options.html#/import"
            >
                Import Rest of History
            </a>
        </span>
    )

    renderCancellableMsg = () => (
        <span className={localStyles.choiceBtnContainer}>
            <p className={localStyles.prepareMsg}>
                Importing the last 30 pages you visited,<br />so you can play
                around immediately
            </p>
            <p onClick={this.props.onCancel} className={localStyles.cancelText}>
                - click to skip -
            </p>
        </span>
    )

    render() {
        if (this.props.isImportsDone) {
            return this.renderFinishMsg()
        }

        return this.renderCancellableMsg()
    }
}

export default ImportMsg
