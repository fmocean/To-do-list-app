from flask import Flask, request, jsonify

app = Flask(__name__)

tasks = []

# Route for adding a new task
@app.route('/tasks', methods=['POST'])
def add_task():
    task = request.json.get('task')
    tasks.append(task)
    return jsonify({'message': 'Task added successfully'})

# Route for getting all tasks
@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify({'tasks': tasks})

# Route for deleting a task
@app.route('/tasks/<int:index>', methods=['DELETE'])
def delete_task(index):
    if index >= len(tasks):
        return jsonify({'error': 'Task index out of range'})
    tasks.pop(index)
    return jsonify({'message': 'Task deleted successfully'})

if __name__ == '__main__':
    app.run()
