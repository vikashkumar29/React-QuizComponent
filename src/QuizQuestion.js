import React, {Component} from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {incorrectAnswer : false}
    }

    handleClick(buttonText) {
        let isIncorrectAnswer = false;
        if (this.props.quiz_question.answer === buttonText) {
            this.props.showNextQuestionHandler();
            isIncorrectAnswer = false;
        } else {
            isIncorrectAnswer = true;
        }
        this.setState({incorrectAnswer: isIncorrectAnswer});
    }

    render() {
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {
                            this.props.quiz_question.answer_options.map((answer_option, index) => (
                            <QuizQuestionButton button_text={answer_option} key={index} clickHandler={this.handleClick.bind(this)}/>
                        ))
                    }
                    </ul>
                </section>
                {this.state.incorrectAnswer ? <p className='error'>Sorry, that's not right</p> : null}
            </main>
        );
    }
}

export default QuizQuestion;