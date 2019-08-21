package com.travelexpanses.repository;

import org.springframework.data.repository.CrudRepository;

import com.travelexpanses.entities.Attachment;

public interface AttachmentRepository extends CrudRepository<Attachment, Long> {

}
