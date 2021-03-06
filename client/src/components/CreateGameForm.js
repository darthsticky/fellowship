import React from 'react';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.css';
import {defaultGameImage} from '../images/imageData';

/**
 * Form for Creating a NEW Game
 * @param {func} handleChange function for input
 * @return {object} which is containing state
 * gameName, gameDescription and gameImage
 */
class CreateGameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameName: '',
      gameDescription: '',
      gameImage: defaultGameImage,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    let target = event.target;
    let value = target.value;
    let name = target.name;

    // console.log(target);
    this.setState({
      [name]: value,
    });
  }

  render() {
    const createGame = this.props.createNewGame;
    return (
      <div className='create-game-form'>
        <form>
          <div className='gamename-input'>
            <label>Game Name:</label>
            <input className=''
              type='text'
              name='gameName'
              onChange={this.handleInputChange}
            />
          </div>
          <div className='gamedescription-input'>
            <label>Short Description:</label>
            <input className=''
              type='text'
              name='gameDescription'
              onChange={this.handleInputChange}
            />
          </div>
          <button type='button'
            onClick={() => createGame(this.state)}
          >Add Game
          </button>
        </form>
      </div>
    );
  }
}
CreateGameForm.propTypes = {
  createNewGame: PropTypes.func,
};

export default CreateGameForm;
