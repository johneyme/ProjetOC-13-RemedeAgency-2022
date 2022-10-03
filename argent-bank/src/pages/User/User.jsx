import './User.css';

import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import Account from '../../components/Account/Account';
import { api } from '../../utils/axios';
import { dataAccount } from '../../data/dataAccount';
import { userActions } from '../../utils/Redux/userSlice';

/** @function create the profile page based on the user's info received from the database.
 *
 * @returns (<User/>)
 */

function User() {
  const dispatch = useDispatch();
  const { firstName, lastName } = useSelector((state) => state.user);
  const [isEdit, setIsEdit] = useState(false);

  const [newFirstname, setNewFirstname] = useState(firstName);
  const [newLastname, setNewLastname] = useState(lastName);

  //save data editor
  const save = async () => {
    if (firstName.trim() === '' && lastName.trim() === '') {
      return;
    }

    const response = await api.updateProfile(newFirstname, newLastname);
    dispatch(userActions.setUserInfos(response.body));
    setIsEdit(false);
  };
  return (
    <main className="user-page bg-dark">
      {isEdit ? (
        <section className="user-page__header">
          <h1>
            Welcome back
            <br /> {firstName} {lastName}!
          </h1>

          <div className="edit-section">
            <input
              type="text"
              className="firstNameInput"
              defaultValue={firstName}
              onChange={(e) => setNewFirstname(e.target.value)}
            />
            <input
              type="text"
              className="lastNameInput"
              defaultValue={lastName}
              onChange={(e) => setNewLastname(e.target.value)}
            />
          </div>
          <div className="edit-section">
            <button className="editor-button" onClick={save}>
              Save
            </button>
            <button className="editor-button" onClick={() => setIsEdit(false)}>
              Cancel
            </button>
          </div>
        </section>
      ) : (
        <div className="user-page__header">
          <h1>
            Welcome back
            <br />
            {firstName + ' ' + lastName} !
          </h1>
          <button className="edit-button" onClick={() => setIsEdit(true)}>
            Edit Name
          </button>
        </div>
      )}

      <div className="operation-grid">
        {dataAccount.map((account, index) => (
          <Account
            key={index}
            id={account.id}
            title={account.title}
            amount={account.amount}
            description={account.description}
          />
        ))}
      </div>
    </main>
  );
}

export default User;
