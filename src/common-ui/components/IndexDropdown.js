import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './IndexDropdown.css'

class IndexDropdown extends PureComponent {
    static propTypes = {
        children: PropTypes.array.isRequired,
        onTagSearchChange: PropTypes.func.isRequired,
        onTagSearchKeyDown: PropTypes.func.isRequired,
        numberOfTags: PropTypes.number.isRequired,
        setTagDivRef: PropTypes.func,
        setInputRef: PropTypes.func.isRequired,
        tagSearchValue: PropTypes.string.isRequired,
        overview: PropTypes.bool,
        tag: PropTypes.bool,
        domain: PropTypes.bool,
    }

    get mainClass() {
        return cx(styles.tagDiv, {
            [styles.tagDivFromOverview]: this.props.overview,
            [styles.tagDivForFilter]: this.props.tag || this.props.domain,
        })
    }

    render() {
        return (
            <div className={this.mainClass} ref={this.props.setTagDivRef}>
                <form className={styles.searchContainer}>
                    <input
                        className={styles.search}
                        name="query"
                        placeholder={
                            'Search & Add ' +
                            (this.props.domain ? 'Domains' : 'Tags') +
                            '(s)'
                        }
                        onChange={this.props.onTagSearchChange}
                        onKeyDown={this.props.onTagSearchKeyDown}
                        ref={this.props.setInputRef}
                        autoComplete="off"
                        value={this.props.tagSearchValue}
                        autoFocus
                    />
                    <i className="material-icons">search</i>
                </form>
                <div className={styles.tagContainer}>{this.props.children}</div>
                <div className={styles.summaryTagContainer}>
                    <div className={styles.numberTags}>
                        <span className={styles.bold}>
                            {this.props.numberOfTags}
                        </span>{' '}
                        {this.props.domain ? 'domains' : 'tags'} selected
                    </div>
                </div>
            </div>
        )
    }
}

export default IndexDropdown
