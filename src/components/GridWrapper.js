import styled from 'styled-components';

const GridWrapper = styled.div`
display: grid;

${({theme}) => theme.media.desktop } {
    grid-template-columns: repeat(12, 1fr);
}



`