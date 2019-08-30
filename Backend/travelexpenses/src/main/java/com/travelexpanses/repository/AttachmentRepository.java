package com.travelexpanses.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.travelexpanses.entities.Attachment;

@Repository
public interface AttachmentRepository extends JpaRepository<Attachment, Long> {

}
