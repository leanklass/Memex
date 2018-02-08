import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Wrapper } from 'src/common-ui/components'
import DeleteConfirmModal from './DeleteConfirmModal'
import Header from './Header'
import styles from './Overview.css'
import ShareButtons from './ShareButtons'
import Filters from './FiltersContainer'

const showFilterClass = ({ showFilter }) =>
    classNames({
        [styles.filtersContainer]: true,
        [styles.hideFilter]: !showFilter,
    })

const Overview = props => (
    <Wrapper>
        <Header {...props} />
        <ShareButtons />

        <div className={showFilterClass(props)}>
            <Filters setTagDomainButtonRef={props.setTagDomainButtonRef} />
        </div>
        <div
            className={styles.main}
            style={{
                marginTop: props.showFilter ? '180px' : '100px',
            }}
        >
            {props.children}
        </div>
        <DeleteConfirmModal
            isShown={props.isDeleteConfShown}
            onClose={props.resetDeleteConfirm}
            deleteDocs={props.deleteDocs}
        />
    </Wrapper>
)

Overview.propTypes = {
    children: PropTypes.node.isRequired,
    isDeleteConfShown: PropTypes.bool.isRequired,
    resetDeleteConfirm: PropTypes.func.isRequired,
    deleteDocs: PropTypes.func.isRequired,
    showFilter: PropTypes.bool.isRequired,
    setTagDomainButtonRef: PropTypes.func,
}

export default Overview
