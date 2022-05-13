import styled from "@emotion/styled";

export const Button = styled.button`
    margin-right: 8px;
    display: inline-block;
    height: 32px;
    width: 80px;

    border-radius: 5px;

    background-color: ${(props) => {
        switch (props.name) {
            case 'good':
                return "green";
            case 'neutral':
                return "yellow";
            case 'bad':
                return "red";
            default:
                return "gray";
        }
    }}
`;