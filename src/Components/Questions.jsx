import Accordion from 'react-bootstrap/Accordion';

function QA() {
    return (
        <div className=''>
            <div className='py-3 text-qa '>
                <h3>
                    Frequently Asked Questions
                </h3>
            </div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How much does the Jeep Safari Budget option cost?</Accordion.Header>
                    <Accordion.Body>
                        The Jeep Safari Standard version costs 35€ per adult and 26€ per child.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Is it very bumpy?</Accordion.Header>
                    <Accordion.Body>
                        Fun level bumps, not dangerous.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Can I swim?</Accordion.Header>
                    <Accordion.Body>
                       Yes, river stop included.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Is it very bumpy?</Accordion.Header>
                    <Accordion.Body>
                        Fun level bumps, not dangerous.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Will I get wet?</Accordion.Header>
                    <Accordion.Body>
                        Yes water fights are part of the experience.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Should I bring a phone?</Accordion.Header>
                    <Accordion.Body>
                        Only if waterproof or in a waterproof case.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default QA;