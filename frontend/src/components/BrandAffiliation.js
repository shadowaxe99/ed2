import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { manageAffiliations } from '../redux/actions/affiliationActions';

const BrandAffiliation = () => {
  const [brandId, setBrandId] = useState('');
  const [affiliationStatus, setAffiliationStatus] = useState('');
  const dispatch = useDispatch();
  const affiliation = useSelector(state => state.affiliation);

  useEffect(() => {
    if (affiliation.error) {
      alert(affiliation.error);
    }
    if (affiliation.message) {
      alert(affiliation.message);
    }
  }, [affiliation]);

  const handleAffiliationManage = (e) => {
    e.preventDefault();
    dispatch(manageAffiliations(brandId, affiliationStatus));
  };

  return (
    <div>
      <h2>Manage Brand Affiliations</h2>
      <form onSubmit={handleAffiliationManage}>
        <label htmlFor="brand-id">Brand ID:</label>
        <input type="text" id="brand-id" value={brandId} onChange={(e) => setBrandId(e.target.value)} required />

        <label htmlFor="affiliation-status">Affiliation Status:</label>
        <select id="affiliation-status" value={affiliationStatus} onChange={(e) => setAffiliationStatus(e.target.value)} required>
          <option value="">Select Status</option>
          <option value="add">Add</option>
          <option value="remove">Remove</option>
        </select>

        <button type="submit" id="manage-affiliations-button">Submit</button>
      </form>
    </div>
  );
};

export default BrandAffiliation;