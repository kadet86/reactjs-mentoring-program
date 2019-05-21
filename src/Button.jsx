import styled from 'styled-components';

const StyledButton = styled.button`
    margin: 0;
    color: #ffffff;
    background-color: #007ad9;
    border: 1px solid #007ad9;
    font-size: 14px;
    transition: background-color 0.2s, box-shadow 0.2s;
    border-radius: 3px;
    display: inline-block;
    position: relative;
    padding: 0;
    text-decoration: none !important;
    cursor: pointer;
    text-align: center;
    zoom: 1;
    overflow: visible;

    &.button-danger {
        color: #ffffff;
        background-color: #e91224;
        border: 1px solid #e91224;
    }

    &.button-secondary {
        color: #333333;
        background-color: #f4f4f4;
        border: 1px solid #f4f4f4;
    }
`;

const ButtonText = styled.span`
    padding: 0.429em 1em;
    display: block;
    line-height: normal;
    box-sizing: border-box;
`;

export default function Button(props) {
    const { label, ...buttonProps } = props;
    return (
        <StyledButton {...buttonProps}>
            <ButtonText>{props.label}</ButtonText>
        </StyledButton>
    );
}
