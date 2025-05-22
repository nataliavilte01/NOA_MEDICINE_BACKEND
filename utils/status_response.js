class StatusResponse{
    sendResponse(response ,statusHttp, status, msg, data){
        response.status(statusHttp).json({
            'status': status,
            'msg': msg,
            'data':data
        })
    }
}
export default StatusResponse