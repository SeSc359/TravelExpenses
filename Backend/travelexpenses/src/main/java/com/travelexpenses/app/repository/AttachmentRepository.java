package com.travelexpenses.app.repository;

import org.springframework.data.repository.CrudRepository;

import com.travelexpenses.app.entities.Attachment;

public interface AttachmentRepository extends CrudRepository<Attachment, Long> {

}
