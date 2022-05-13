import { Button } from "./FeedbackOptions.styled";
import PropTypes from 'prop-types';

export const FeedbackOptions = ({options, onLeaveFeedback}) => (
    <div>
        {options.map(option => {
            return <Button onClick={onLeaveFeedback} key={option} name={option}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
            </Button>
        })}
    </div>
) 

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired
}