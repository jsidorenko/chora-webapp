import React from 'react'
import styles from './Account.scss'

const Account = ({
  account,
  address,
  isContributor,
  isOwner,
}) => (
  <div className={styles.content}>
    <h2>
      {'Account'}
    </h2>
    <p>
      {`isOwner: ${isOwner ? 'true' : 'false'}`}
    </p>
    <p>
      {`isContributor: ${isContributor ? 'true' : 'false'}`}
    </p>
    <p>
      {`ballots: ${account.ballots.length ? account.ballots.join(', ') : '(no ballots)'}`}
    </p>
    <p>
      {`bounties: ${account.bounties.length ? account.bounties.join(', ') : '(no bounties)'}`}
    </p>
    <p>
      {`projects: ${account.projects.length ? account.projects.join(', ') : '(no projects)'}`}
    </p>
    <p>
      {`tokens: ${account.tokens}`}
    </p>
  </div>
)

export default Account
