
<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');
include("./connect.php");

$conn = new mysqli($db_host, $db_user, $db_pass, $db_name);

if ($conn->connect_error) {
    die(json_encode(['error' => 'Database connection error.']));
}

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        getMenu($conn);
        break;
    case 'POST':
        updateApproval($conn);
        break;
    default:
        die(json_encode(['error' => 'Invalid request method.']));
}

function getMenu($conn) {
    $result = $conn->query('SELECT id, fname, lname, mobile, email, user_type, new_staff FROM user_tb');
    $data = [];

    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    echo json_encode($data);
}
$conn->close();

function updateApproval($conn) {
    $data = json_decode(file_get_contents('php://input'), true);
    $sql = 'UPDATE user_tb SET new_staff = ? WHERE id = ?';
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('ii', $data['new_staff'], $data['id']);

    if ($stmt->execute()) {
        echo json_encode(['message' => 'Approval successfully.']);
    } else {
        echo json_encode(['error' => 'Approval failed.']);
    }
 
    $stmt->close();
}

?>