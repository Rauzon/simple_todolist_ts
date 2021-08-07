import React from 'react';
import { useHistory } from 'react-router-dom';

type AboutPagePropsType = {

}

const AboutPage = (props: AboutPagePropsType): JSX.Element => {
  const { push } = useHistory();

  return (
    <>
      <h1>Information Page</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet aut commodi consequatur cum cumque delectus dolores earum itaque modi neque non numquam quis quod quos repellat, sapiente tempora tempore?</p>
      <button className="btn" onClick={() => push('/')}>back to list of deals</button>
    </>
  );
};

export default AboutPage;
