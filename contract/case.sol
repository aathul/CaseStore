pragma solidity 0.8.1;

contract CaseDetails {
    struct cases {
        string caseName;
        string caseId;
        string location;
        string date;
        string[] evidence;
    }

    mapping(string => cases) public caseDetails;

    function newCase(
        string memory _caseId,
        string memory _caseName,
        string memory _location,
        string memory _date,
        string[] memory _evidence
    ) public {
        caseDetails[_caseId] = cases(
            _caseId,
            _caseName,
            _location,
            _date,
            _evidence
        );
    }

    function getCase(string memory _caseId)
        public
        view
        returns (
            string memory _caseName,
            string memory _location,
            string memory _date,
            string[] memory _evidence
        )
    {
        _caseName = caseDetails[_caseId].caseName;
        _location = caseDetails[_caseId].location;
        _date = caseDetails[_caseId].date;
        _evidence = caseDetails[_caseId].evidence;
    }
}
