function LogoutConfirmModal({ onConfirm, onCancel }) {
  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <h2 className="section-title">Log out?</h2>
        <p>Are you sure you want to log out?</p>

        <div className="modal-actions">
          <button onClick={onConfirm}>Yes, log out</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default LogoutConfirmModal;
