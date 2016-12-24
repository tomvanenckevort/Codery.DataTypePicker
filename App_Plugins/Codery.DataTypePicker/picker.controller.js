angular.module('umbraco').controller('Codery.DataTypePickerController', function ($scope, editorState, dataTypeResource) {

    if ($scope.model.value !== undefined && $scope.model.value !== null) {
        $scope.model.value = parseInt($scope.model.value);
    }

    $scope.dataTypes = [];

    // load all data types, apart from current to avoid inception

    dataTypeResource.getAll()
        .then(function(data) {
            $scope.dataTypes = _.filter(data, function (dt) { return dt.id !== editorState.current.id; });
        });

});
